import "./Colaborador.css"

const Colaborador = ({imagem, nome, time, posicao, corDeFundo})=>{
  return(
    <div className="colaborador">
      <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{time}</h5>
        <h5>{posicao}</h5>
      </div>
    </div>
  )
}

export default Colaborador 