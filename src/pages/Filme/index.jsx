import React from "react";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { toast } from "react-toastify";
import api from "../../services/api";

export default function Filme() {
	const { id } = useParams();
	const history = useHistory();

	const [filme, setFilme] = useState([]);
	const [loading, setLoading] = useState([true]);

	useEffect(() => {
		async function loadFilme() {
			const rotaFilme = `/r-api/?api=filmes/${id}`;
			const response = await api.get(rotaFilme);
			setFilme(response.data);
			setLoading(false);

			if (response.data.length === 0) {
				history.replace("/");
			}
		}

		loadFilme();
		return console.log("COMPONENTE DEMONTADO");
	}, [history, id]);

	function salvaFilme() {
		const minhaLista = localStorage.getItem("filmes");
		let filmesSalvos = JSON.parse(minhaLista) || [];

		const hasFilme = filmesSalvos.some(
			(filmeSalvo) => filmeSalvo.id === filme.id,
		);
		if (hasFilme) {
			toast.error("Você já salvou esse filme");
			return;
		}

		filmesSalvos.push(filme);
		localStorage.setItem("filmes", JSON.stringify(filmesSalvos));
		toast.success("Filme salvo com sucesso!");
	}

	if (loading) {
		return (
			<div className="filme">
				<h1>Carregando seu filme...</h1>
			</div>
		);
	}
	return (
		<article className="filme">
			<h1>{`${filme.nome}`}</h1>
			<img src={filme.foto} alt={filme.nome} />
			<h2>Sinopse</h2>
			<p>{filme.sinopse}</p>
			<div className="botoes">
				<button onClick={salvaFilme}>Salvar</button>
				<a
					target="top"
					href={`https://youtube.com/results?search_query=${filme.nome} trailer`}
				>
					Trailer
				</a>
			</div>
		</article>
	);
}
