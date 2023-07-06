import dData from '../config/dataPages.json'
import { useState } from 'react'

export default function SearchComponent(props) {
    const params = new URLSearchParams(window.location.search)
    const dato = params.get('search')
    const [search, setSearch] = useState(dato ? dato : '')
    const [goSearcher, setSearcher] = useState(dato? false : true)
    const data = dData.concat(props.slot)
    const searcher = (e) => {
        setSearch(e.target.value) 
        setSearcher(true)
    }
    const goSearch = (e) => {
        e.preventDefault()
        setSearcher(false)
    }
    const results = goSearcher ? data : data.filter((d) => d.page.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(search.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")) || d.content.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(search.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")) || d.author?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(search.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")))
    return (
        <div>
            <form onSubmit={goSearch}>
                <label htmlFor="buscar" hidden>
                    Buscar:
                </label>
                <input value={search} onChange={searcher} type="text" placeholder='Buscar...' id='buscar' name='buscar' autoComplete='off' />
            </form>
            <p>{results.length !== 0 ? `${results.length} elemento${results.length > 1? 's' : ''} encontrado${results.length > 1? 's' : ''} para "${search}"` : `No se encontraron resultados para "${search}". Intenta una nueva busqueda`}</p>
            {
                results.map(r => (
                    <div key={r.id}>
                        <h4><a href={r.url}>{r.page}</a></h4>
                        <p>{r.content}{r.author? ` - ${r.author}`:''}</p>
                    </div>))
            }
        </div>
    )
}
