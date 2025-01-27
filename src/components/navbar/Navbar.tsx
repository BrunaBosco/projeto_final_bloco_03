import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-red-600 text-white'>
            
                <div className="container flex justify-between text-lg">
                    Farmácia Longa Vida

                    <div className='flex gap-4'>
                        Produto
                        <Link to='/categoria' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastrarCategoria' className='hover:underline'>Cadastrar Categoria</Link>
                        Perfil
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar