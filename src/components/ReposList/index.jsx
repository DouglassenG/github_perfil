import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [erro, setErro] = useState(null); // começa como null

    useEffect(() => {
        setEstaCarregando(true);
        setErro(null); // limpa erro anterior

        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Usuário não encontrado.");
                }
                return res.json();
            })
            .then(resJson => {
                setTimeout(() => {
                    setRepos(resJson);
                    setEstaCarregando(false);
                }, 3000);
            })
            .catch(() => {
                setErro("Usuário não encontrado. Verifique os dados e tente novamente.");
                setRepos([]);
                setEstaCarregando(false);
            });

    }, [nomeUsuario]);

    return (
        <div className="container">
            {estaCarregando ? (
                erro ? (
                    <h1 style={{ color: 'red' }}>{erro}</h1>
                ) : (
                    <h1>Carregando...</h1>
                )
            ) : (
                <ul className={styles.list}>
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.itemName}>
                                <b>Nome:</b> {name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem:</b> {language}
                            </div>
                            <a
                                className={styles.itemLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                href={html_url}
                            >
                                Visitar no GitHub
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ReposList;
