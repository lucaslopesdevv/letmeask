import { Link } from 'react-router-dom';

import imgIllustration from '../assets/images/illustration.svg';
import imgLogo from '../assets/images/logo.svg';
import imgGoogleIcon from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';
import { TestContext } from '../App';
import { useContext } from 'react';

export function NewRoom(){  

    const = { value, setValue } = useContext(TestContext)

    return(
        <div id="page-auth">
            <aside>
                <img src={imgIllustration} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={imgLogo} alt="Letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input 
                        type="text"
                        placeholder="Nome da sala" 
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}