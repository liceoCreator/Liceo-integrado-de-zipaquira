import { useState } from 'react'
export default function SearchComponentMini() {
    const [search, setSearch] = useState('')
    const searcher = (e) => {
        setSearch(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        window.location.href = `/busqueda?search=${search}`
    }
    return (
        <form onSubmit={handleSubmit} className="flex w-full p-2 gap-x-2 border-b border-b-blue-950 focus-within:border-b-2 md:w-60 md:hover:border-b-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#172554" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search font-extralight"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <label htmlFor="buscar" hidden>
                Buscar:
            </label>
            <input value={search} onChange={searcher} type="text" placeholder='Buscar...' id='buscar' name='buscar' autoComplete='off' className='focus:outline-none w-full font-extralight'/>
            <label htmlFor="btn-buscar" hidden>Buscar: <button type='submit' name='btn-buscar' id='btn-buscar'>Buscar</button>
            </label>
        </form>
    )
}