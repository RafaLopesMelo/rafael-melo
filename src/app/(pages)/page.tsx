import { Heading } from '@/shared/components/heading';
import { Paragraph } from '@/shared/components/paragraph';

export default function About() {
    return (
        <>
            <div className="max-w-xl">
                <Heading as="h1" className="text-5xl font-bold tracking-wide">
                    Rafael Melo
                </Heading>
                <Heading as="h2" className="text-xl mt-2">
                    Software engineer
                </Heading>
                <Paragraph className="text-lg mt-5 text-zinc-600 dark:text-zinc-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam justo arcu, fermentum vitae ligula sit amet, commodo
                </Paragraph>
            </div>

            <div className="mt-8">
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam justo arcu, fermentum vitae ligula sit amet, commodo
                    mattis odio. Donec finibus lacus id risus imperdiet, eu
                    malesuada velit rutrum. Sed efficitur ac leo gravida
                    porttitor. Nulla tempus, libero sit amet viverra bibendum,
                    ipsum felis accumsan ante, id ultrices odio elit eget mi.
                    Morbi quis arcu neque. Phasellus mollis dapibus massa non
                    fringilla. Nullam gravida sollicitudin risus, in molestie
                    felis aliquam ut. Aliquam hendrerit maximus elementum. Nulla
                    imperdiet interdum libero, ut rutrum odio iaculis sed.
                    Curabitur magna felis, cursus nec fermentum quis, ultricies
                    a elit. Curabitur felis nibh, facilisis non urna tristique,
                    cursus tristique ligula. Integer luctus, felis a interdum
                    gravida, ex eros rhoncus lacus, quis faucibus tortor libero
                    pulvinar lacus.
                </Paragraph>

                <Paragraph>
                    Quisque mauris neque, laoreet vitae scelerisque eu, egestas
                    vel justo. Donec sed lorem odio. Nunc facilisis luctus diam
                    quis volutpat. Duis sed facilisis ante, ac semper ante.
                    Aliquam erat volutpat. Cras mollis hendrerit eros faucibus
                    rutrum. Pellentesque nec pretium elit, mattis semper elit.
                    Etiam rutrum porttitor risus, ut fringilla urna ullamcorper
                    id. Cras tincidunt lectus vel ex eleifend, non consequat
                    odio venenatis. In feugiat neque ut lobortis elementum.
                    Suspendisse justo velit, varius non massa ac, vestibulum
                    ullamcorper enim. Sed luctus elit et purus commodo
                    tincidunt. Donec congue luctus turpis, non gravida nisi
                    hendrerit in. Aliquam erat volutpat. Nullam fringilla ipsum
                    maximus dui tincidunt rutrum. Aliquam rutrum lacinia leo
                    vitae vestibulum.
                </Paragraph>

                <Paragraph>
                    Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Nam ex nunc, ultrices a
                    posuere ac, accumsan in lorem. Mauris congue imperdiet
                    scelerisque. Vestibulum luctus condimentum nunc non
                    sollicitudin. Aenean tellus risus, viverra id velit in,
                    placerat dapibus nisi. Ut pulvinar odio nec sapien
                    malesuada, quis mollis nibh scelerisque. Quisque sit amet
                    leo augue. Mauris sed ante vel arcu tristique luctus.
                    Integer et pellentesque risus, vel efficitur augue. Nam ac
                    mollis turpis. Mauris feugiat quam vitae massa tempor, sed
                    blandit tortor ornare. Morbi pretium odio maximus est
                    feugiat, quis pharetra metus mollis. Sed elementum pulvinar
                    sapien at efficitur. Nunc ut ante luctus, euismod neque non,
                    semper orci.
                </Paragraph>
            </div>
        </>
    );
}
