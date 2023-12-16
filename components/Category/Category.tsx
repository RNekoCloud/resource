import Card from "../Card/Card"

export default function Category() {

    return(
        <div className="container mt-36">
            <div className="w-3/4 mx-auto">
                <h2 className="text-4xl font-semibold text-center">Category</h2>
            </div>

            <div className="flex flex-wrap justify-center mt-6">
                <Card 
                title="Git" 
                content="Most popular version control and collaboration tool"
                img=""
                >

                </Card>
            </div>
        </div>
    )
}