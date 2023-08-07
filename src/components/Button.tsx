const Button = {
    Solid: ({text}:{text: string})=>{
        return (
            <button type="submit" className="px-5 py-2 shadow text-white bg-yellow-600">{text}</button>
        )
    }
}

export {Button};