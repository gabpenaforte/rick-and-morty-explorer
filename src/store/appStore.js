import { create } from 'zustand';
import axios from 'axios';

const useAppStore = create((set, get) => ({
    charactersList: [], // lista de personagens
    character: {}, // Dados do Personagem
    pageNumber: 1, // Número da página
    pages: 0, // Total de páginas
    search: "", // Pesquisa
    setCharactersList: (charactersList) => set({ charactersList }),
    setCharacter: (character) => set({ character }),
    setPageNumber: (pageNumber) => set({ pageNumber }),
    setPages: (pages) => set({ pages }),
    setSearch: (search) => set({ search }),
    getCharacters: async (search = "", pageNumber = 1) => {
        try {
            const { setCharactersList, setPages, setPageNumber } = get();
            const response = await axios.get(
                `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`
            );

            const data = response.data;

            setCharactersList(data.results);
            setPages(data.info.pages);
            setPageNumber(pageNumber);
        } catch (error) {
            console.error(error);
        }
    },
}))

export default useAppStore;