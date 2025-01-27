import Categoria from "./Categoria";

export default interface Produto {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    quantidade: number;
    categoria: Categoria | null;
}

