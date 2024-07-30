import { 
    Quattrocento, Quattrocento_Sans, 
    Della_Respira, Open_Sans, 
    Montserrat
} from "next/font/google";

const head1 = Quattrocento({ subsets: ['latin'], weight: ['400', '700'] })
const body1 = Quattrocento_Sans({ subsets: ['latin'], weight: ['400', '700'] })

const head2 = Della_Respira({ subsets: ['latin'], weight: ['400'] })
const body2 = Open_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export const head3 = Della_Respira({ subsets: ['latin'], weight: ['400'] })
export const body3 = Montserrat({ subsets: ['latin'], weight: ['100','400', '700','900'] })

// export const font = {
//     head: head1.className,
//     body: body1.className
// }

export const font = {
    head: head3,
    body: body3
}

// export const font = {
//     head: head2.className,
//     body: body2.className
// }