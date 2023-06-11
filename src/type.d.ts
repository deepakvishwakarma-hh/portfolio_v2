
export interface project {
    name: string,
    live: string, // project live lunk goes here
    github: string, // github repository link goes here
    index: string,
    year: string,
    slug: string,
    story: string,
    image: string,
    gallary: string[],
    overview: string,
    development: string,
    previous?: {
        name: string,
        href: string
    },
    next?: {
        name: string,
        href: string
    }
}