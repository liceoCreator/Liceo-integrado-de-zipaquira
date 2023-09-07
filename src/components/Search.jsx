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
        <div className='flex flex-col justify-center items-center gap-5 text-blue-950 mb-10'>
            <form onSubmit={goSearch} className='w-[80%]'>
                <label htmlFor="buscar" hidden>
                    Buscar:
                </label>
                <input value={search} onChange={searcher} type="text" placeholder='Buscar...' id='buscar' name='buscar' autoComplete='off' className='w-full py-2 px-3 text-lg border border-blue-950'/>
                <p className='font-light mt-2'>{results.length !== 0 ? `${results.length} elemento${results.length > 1? 's' : ''} encontrado${results.length > 1? 's' : ''} para "${search}"` : `No se encontraron resultados para "${search}". Intenta una nueva busqueda`}</p>
            </form>
            <div className='flex flex-col gap-5 w-[80%] md:w-4/5'>
            {
                results.map(r => (
                    <div key={r.id}>
                        <h4 className='text-blue-600 hover:underline'><a href={r.url}>{r.page}</a></h4>
                        <p className='font-light'>{r.content}{r.author? ` - ${r.author}`:''}</p>
                    </div>
                    ))
            }
            </div>  
        </div>
    )
}
