import { useNavigate } from 'react-router-dom';

import { auth, firebase } from '../services/firebase';

import imgIllustration from '../assets/images/illustration.svg';
import imgLogo from '../assets/images/logo.svg';
import imgGoogleIcon from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';

export function Home(){
    const navigate = useNavigate();
    const { user, signInWithGoogle } = useContext(AuthContext);
    
    async function handleCreateRoom(){

        if(!user){
            await signInWithGoogle();
        }

        navigate('/rooms/new');
    }

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
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={imgGoogleIcon} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input 
                        type="text"
                        placeholder="Digite o código da sala" 
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}