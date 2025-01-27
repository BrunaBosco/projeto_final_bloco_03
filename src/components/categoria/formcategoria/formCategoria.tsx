import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { buscar, atualizar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";

function FormCategoria() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

    const { id } = useParams<{ id: string }>()

    async function buscarCategoriaPorId(id: string) {
        try {
            await buscar(`/categoria/${id}`, setCategoria)
        } catch (error) {
            console.error("Erro ao buscar categoria:", error)
        }
    }

    useEffect(() => {
        if (id ) {
            buscarCategoriaPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        });
    }

    function retornar() {
        navigate('/categoria');
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id) {
            try {
                await atualizar(`/categoria`, categoria, setCategoria)

                alert('Categoria atualizada com sucesso')

            } catch (error) {
                console.error("Erro ao atualizar a Categoria:", error)
                alert('Erro ao atualizar a Categoria')
            }

        } else {
            try {
                await cadastrar(`/categoria`, categoria, setCategoria)

                alert('Categoria cadastrada com sucesso');

            } catch (error) {
                console.error("Erro ao cadastrar a Categoria:", error)
                alert('Erro ao cadastrar a Categoria')
            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">
                {id ? 'Editar Categoria' : 'Cadastrar Categoria'}
            </h1>

            <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="categoria">Nome da Categoria</label>
                    <input
                        type="text"
                        placeholder="Categoria"
                        name="categoria"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.categoria}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    type='submit'
                    className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800
                               text-white font-bold w-1/2 mx-auto py-2 flex justify-center'
                >
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id ? 'Atualizar' : 'Cadastrar'}</span>
                    }
                </button>
            </form>
        </div>
    );
}

export default FormCategoria;
