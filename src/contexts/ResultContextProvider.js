import React, { useContext, createContext, useState } from 'react'

const ResultContext = createContext()

const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('Elon Musk')

    const getResults = async (type) => {
        setIsLoading(true)
        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Key': '3b6ff59018msh32b9e1a12e93216p162addjsnd4dd18b15368',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
        })

        const data = await response.json()

        if (type.includes('/news')) {
            setResults(data.entries)
        } else if (type.includes('/image')) {
            setResults(data.image_results)
        } else {
            setResults(data.results)
        }

        setIsLoading(false)
    }

    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider >
    )
}

export const useResultContext = () => useContext(ResultContext)