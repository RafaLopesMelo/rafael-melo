# What we'll talk about
This article is the first in a series talking about how to implement DDD tactical patterns inside Go language.

In this article, we will talk about of how to implement the first bricks while developing with DDD in a Go project: Entities, Value Objects and Repositories. 

We'll begin with a brief overview of DDD principles and the Go language. Following that, I'll outline what I consider the best approach for integrating these patterns into your Go projects.

Note, we will not talk about folder structure or how to organize your modules, so if you want to implement it you will need to make that choices by yourself (~~until I write an article about it~~).

Of course, these insights are just my thoughts, from someone who's new to the language but certainly has something to teach from experience with other languages. Feel free to take it as a base to create your own implementation.
# Prerequisites

- **Required:** Fluency in at least 1 programming language
- **Recommended:** Basics of Go syntax
- **Recommended:** Some experience implementing DDD tactical patterns
# Introduction
In the introduction, we will provide a brief overview of DDD and Go, offering a general summary of each topic. If you're already familiar with these concepts, feel free to skip ahead to the **Implementation** section.
## DDD
**DDD** is an acronym for **Domain Driven Design**, it basically tells us that we must develop the software from a domain point of view.

*But what exactly is the "Domain"?*

The domain refers to the core problem that the software addresses and the knowledge associated with it. Developing software from a domain perspective involves creating abstractions that describe the aspects of the domain that can be used to actually solve problems related to that domain.

The DDD patterns can be categorized in two main types: **Strategical** and **Tactical**.

In this article we'll focus exclusively on tactical patterns, since these are applicable directly in the code and can vary depending on the language being used.

Personally, I'm a huge DDD fan since it gives me the power of encapsulate the core logic of my software within a centralized layer. This approach ensures that the business logic is consistently applied across different contexts in my codebase, promoting reusability and maintainability.
## Go
Go is an open-source programming language developed by Google and released in 2009. It is compiled and designed for productivity and concurrent programming.

Different from other languages that I have experience with, Go is not an object oriented language, despite it has some characteristics of it. I'd say that Go has its own paradigm, the "Go way of programming", including flavors of functional, object oriented and imperative programming.
# Implementation
Because of having its own style, it might not be straightforward to implement DDD tactical patterns in Go. After researches I've developed a model that adheres to DDD constraints while preserving language dynamism.

In the following sections, we will explore each DDD artifact, providing insights into the design decisions made:
## Value Objects
**Value Objects** are fundamental components in DDD. They are immutable and can be compared based on their attributes, it means that two instances of the same value object type with identical values are interchangeable.

An illustrative example of a Value Object is an email address. Email is commonly represented as simple string within most systems, but an email address is not just a string, it has its own format and rules, therefore it should be represented as a custom structure.

An email address is indeed a value object because it must be immutable, since any alteration to its value results in an entirely different email address. For instance, `no-reply@rafamelo.dev.br` is distinct from `support@rafamelo.dev.br`; changing one to the other is nonsensical as they represent separate entities.

Deriving from the characteristic described above, we can assume that we can compare value objects using its values, if two email address instances have the same value, so they're equal.

The same principles can be applied for ID's within system, and that's what we'll implement. See the example below:

```go
// unique_entity_identifier.go
package unique_entity_id

import uuid "github.com/satori/go.uuid"

type UniqueEntityID struct {
	value string
}

func (id *UniqueEntityID) Value() string {
	return id.value
}

func NewIDFromValue(id string) (*UniqueEntityID, error) {
	if id == "" {
		return nil, errors.New("Unique Entity ID value must not be empty")
	}

	return &UniqueEntityID{
		value: id,
	}, nil
}

func NewID() *UniqueEntityID {
	return &UniqueEntityID{
		value: uuid.NewV4().String(),
	}
}
```

It's quite straightforward to understand what's happening here. `UniqueEntityID` is a struct that has only one property called `value`. We only implement a getter and two constructor methods: `NewIDFromValue`, which creates a `UniqueEntityID` from an predefined value, and `NewID`m which generates a brand-new ID.

Because the struct is immutable, we can perform validations directly within the constructor methods. Once an instance is created, the value cannot be modified.
## Entities
**Entities** should be the first place that we aim to implement business logic, these are the bread and butter when modeling the system's domain.

The main role of an entity is to protect our domain from being in an invalid state. For example, if we have an entity called `video` that requires a title, there must be validations in place to prevent the creation of a video without a title.

When using a common object oriented programming language, is quite simple to implement a basic entity model. Typically, we would implement a constructor that receives the title and, if it's mutable, a setter, both implementing validations to prevent the title from being empty.

In Go, however, I feel that is a bit awkward implementing validation directly on setters or constructor functions since Go does not have error throwing. As a result, each property change would require an `err` validation, potentially making the code verbose and reducing the language's dynamism.

With the aim of keeping the code as direct as possible, see the implementation of `video` entity below:

```go
// video.go
package videos

import (
	"errors"

	"$PATH/unique_entity_id"
)

type Video struct {
	id    *unique_entity_id.UniqueEntityID
	title string
}

func (video *Video) setTitle(title string) {
	video.title = title
}

type NewVideoDto struct {
	Title string
}

func NewVideo(input NewVideoDto, id *unique_entity_id.UniqueEntityID) *Video {
	if id == nil {
		id = unique_entity_id.NewID()
	}

	video := &Video{
		id: id,
		title: input.Title,
	}

	return video
}

func (video *Video) validate() error {
	if video.title == "" {
		return errors.New("Video title must not be empty.")
	}
	
	return nil
}
```

Notice that there are no validations in the constructor method or the title setter. Instead, we have a centralized `validate` method responsible for checking if the entity is in a valid state. Although the validation is implemented, it is not used directly within the `Video` entity. To address this, we create a variation of the `Video` entity called `ValidatedVideo`. See the example below:

```go
// validated_video.go
package videos

type ValidatedVideo struct {
	video Video
}

func (vv *ValidatedVideo) Video() Video {
	return vv.video
}

func NewValidatedVideo(video Video) (*ValidatedVideo, error) {
	err := video.validate()

	if err != nil {
		return nil, err
	}
	
	return &ValidatedVideo{
		video: video,
	}, nil
}
```

The main goal of `ValidatedVideo` is to represent an immutable point in the history of a `Video` in a valid state, for this reason it calls `video`'s `validate` method when being instantiated.
Notice that both the `Video` instance received on constructor method and the instance returned from `Video` getter are not pointers. This is to prevent modifications to the original `Video` instance from affecting the validated video, as any modification could lead to an invalid state.

When referring to a `Video` in domain services or repositories, the `ValidatedVideo` must be used instead, since we always want to execute operations over valid entities. It is important to note, however, that having a `Validated` variation only makes sense for entities that are **aggregate roots**.
## Repositories
**Repositories** are responsible for integrating domain objects with the application's data layer. Typically, they handle saving and retrieving entities from a database.

In most cases, we begin by defining an interface for the repository rather than creating an implementation right away. This approach allows us to vary the implementation, enabling the same repository interface to be implemented using different technologies.
```go
// videos_repository.go
package repositories

import (
	"$PATH/videos"
	"$PATH/unique_entity_id"
)

type VideosRepository interface {
	Save(video *videos.ValidatedVideo) error
	FindByID(id unique_entity_id.UniqueEntityID) (*videos.Video, error)
}
```

As long as they follow the interface, you can have, for example, a `VideosRepository` with two different implementations: one using MySQL for production and another using an in-memory database for testing purposes. This allows you to use them interchangeably.

Notice that when saving a video in repository, the unique parameter is a pointer to `ValidatedVideo`, that is because we want to ensure that all videos being saved is a valid one. Additionally, we use a pointer instead of a value because we may make changes to the `Video` values once saved.
# Conclusion
In this article, we discussed what I believe is the best way to implement the basic tactical patterns of Domain-Driven Design (DDD) using Go. Note that we haven't covered all DDD artifacts; we'll explore these additional concepts in future articles, so stay tuned!
# References
- Repository of implementations of DDD in Go: https://github.com/sklinkert/go-ddd
