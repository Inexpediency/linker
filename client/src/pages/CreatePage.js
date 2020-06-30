import React, {useEffect, useState} from 'react'
import { useHttp } from '../hooks/http.hook'

import './CreatePage.css'

export const CreatePage = () => {
    const { request } = useHttp()
    const [link, setLink] = useState('')

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const pressHandler = async event => {
        if (event.key === 'Enter') {
            try {
                const data = await request('/api/link/generate', 'POST', {
                    from: link
                })
                console.log(data)
                setLink('')
            } catch (e) {}
        }
    }

    return (
        <div className="row">
            <div className="col s8 offset-s2 form_wrapper">
                <div className="input-field col s12">
                    <i className="material-icons prefix">link</i>
                    <input
                        id="email"
                        type="text"
                        value={ link }
                        className="card_form_input"
                        onChange={ e => setLink(e.target.value) }
                        onKeyPress={ pressHandler }
                    />
                    <label htmlFor="email">Enter your link here</label>
                </div>
            </div>
        </div>
    )
}