import Card from "../Card/Card"
import git from "../../public/git.png"

export default function Category() {

    return(
        <section className="container mt-36" id="category">
            <div className="w-3/4 mx-auto">
                <h2 className="text-4xl font-semibold text-center">Category</h2>
            </div>

            <div className="flex flex-wrap justify-center mt-6">
                <Card 
                title="Git" 
                content={<>Sebuah tool yang berfungsi sebagai <i>version control</i> dan untuk berkolaborasi antar <i>developer</i>.</>}
                imgCover={git}
                >
                </Card>
                <Card 
                title="Git" 
                content={<>Sebuah tool yang berfungsi sebagai <i>version control</i> dan untuk berkolaborasi antar <i>developer</i>.</>}
                imgCover={git}
                >
                </Card>
                <Card 
                title="Git" 
                content={<>Sebuah tool yang berfungsi sebagai <i>version control</i> dan untuk berkolaborasi antar <i>developer</i>.</>}
                imgCover={git}
                >
                </Card>
                <Card 
                title="Git" 
                content={<>Sebuah tool yang berfungsi sebagai <i>version control</i> dan untuk berkolaborasi antar <i>developer</i>.</>}
                imgCover={git}
                >
                </Card>
                <Card 
                title="Git" 
                content={<>Sebuah tool yang berfungsi sebagai <i>version control</i> dan untuk berkolaborasi antar <i>developer</i>.</>}
                imgCover={git}
                >
                </Card>
            </div>
        </section>
    )
}