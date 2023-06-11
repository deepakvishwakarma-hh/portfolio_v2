interface Props {
    children: any
}


const Layout: React.FC<Props> = ({
    children
}) => {
    return (
        <div className="border-2 border-red-500 relative hidescrollbar">

            <div className="fixed top-0 left-0 w-full h-full hidescrollbar bg-red-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquid consectetur fuga suscipit quas laborum consequatur quo, ab, veniam voluptatum eveniet qui sint possimus nesciunt non earum repudiandae doloremque cupiditate?
            </div>
            <div className="fixed top-0 left-0 w-full h-full hidescrollbar bg-stone-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquid consectetur fuga suscipit quas laborum consequatur quo, ab, veniam voluptatum eveniet qui sint possimus nesciunt non earum repudiandae doloremque cupiditate?
            </div>

            <div className="fixed top-0 left-0 w-full h-full border-2 border-purple-500 hidescrollbar">
                {children}
            </div>

        </div>
    )
}
export default Layout


/* 

+ first layer of menu controls
+ second layer of content
+ third layer of lines 




*/