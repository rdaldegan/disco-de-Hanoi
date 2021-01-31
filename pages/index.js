import styled from 'styled-components'
import { useEffect, useState } from 'react'

const Main = styled.div`
  position: relative;
  width: 890px;
  height: 890px;
  border: solid 1px;
  border-radius: 50%;
`
const Image = styled.img`
  position: absolute;
  border-radius: 50%;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  transform: rotate(${props => props.rot}deg);
  transition: transform 0.5s ease-in;
  border: solid ${props => props.selec}px yellow;
`;


export default function Home() {
  
  const [selec0, setSelec0] = useState([2])
  const [selec1, setSelec1] = useState([0])
  const [selec2, setSelec2] = useState([0])
  const [selec3, setSelec3] = useState([0])

  const [vitoria, setVitoria] = useState(false)
  const [selecDisk, setSelecDisk] = useState([0])
  const [discos, setDiscos] = useState([0, 120, 240, 0])

  useEffect( () => {
    window.addEventListener("keydown", comandHandler)
  }, [])

  function checaPosicao(posicao){
    if(discos[0] == posicao){
      return 0
    } 
    if(discos[1] == posicao){
      return 1
    }
    if(discos[2] == posicao){
      return 2
    }
    else {
      return 3
    }
  }

  function selecionaBordas(disco){
    if(disco == 0){
      setSelec0([2])
      setSelec1([0])
      setSelec2([0])
      setSelec3([0])
      console.log(selec0,selec1,selec2,selec3)
    }
    else if(disco == 1){
      setSelec0([0])
      setSelec1([2])
      setSelec2([0])
      setSelec3([0])
      console.log(selec0,selec1,selec2,selec3)
    }
    else if(disco == 2){
      setSelec0([0])
      setSelec1([0])
      setSelec2([2])
      setSelec3([0])
      console.log(selec0,selec1,selec2,selec3)
    }
    else if(disco == 3){
      setSelec0([0])
      setSelec1([0])
      setSelec2([0])
      setSelec3([2])
      console.log(selec0,selec1,selec2,selec3)
    }
  }

  function giraDisco(disco, direcao){
    let state = [discos[0], discos[1], discos[2], discos[3]]

    let posicao = discos[disco]
    let proximaPosicao = posicao + direcao
    if(proximaPosicao > 240){
      proximaPosicao = 0
    } else if(proximaPosicao < 0){
      proximaPosicao = 240
    }
    let statusPosicaoAtual = checaPosicao(posicao)
    let statusProxPosicao = checaPosicao(proximaPosicao)
    if(disco <= statusPosicaoAtual &&  disco <= statusProxPosicao){
      state[disco] = proximaPosicao
      discos[disco] = proximaPosicao
    }
    setDiscos(state)
  }
  
  function comandHandler(key){
    let novoDisco = 0
    if(key.keyCode == 38){
      novoDisco = selecDisk[0] + 1
      if(novoDisco > 3){
        novoDisco = 0
      }
      let state = selecDisk
      state[0] = novoDisco
      setSelecDisk(state)
      selecionaBordas(selecDisk[0])
      console.log(selecDisk)
    }
    else if(key.keyCode == 40){
      novoDisco = selecDisk[0] - 1
      if(novoDisco < 0){
        novoDisco = 3
      }
      let state = selecDisk
      state[0] = novoDisco
      setSelecDisk(state)
      selecionaBordas(selecDisk[0])
      console.log(selecDisk)
    }
    let direcao
    if(key.keyCode == 37){
      direcao = -120
      giraDisco(selecDisk[0], direcao)
    } else if(key.keyCode == 39){
      direcao = 120
      giraDisco(selecDisk[0], direcao)
    }
    if(discos[0] == discos[1] && discos[0] == discos[2] && discos[0] == discos[3]){
      setTimeout(()=>{
        let vit = vitoria
      vit = true
      setVitoria(vit)
      }, 1000)
      
    }
  }

  
  return(
    <Main>
      {vitoria === false ?
      <div>
        <Image src='/disco3.png' width={890} height={890} top={0} left={0} selec={selec3} rot={discos[3]}/>
        <Image src='/disco2.png' width={688} height={688} top={101} left={101} selec={selec2} rot={discos[2]}/>
        <Image src='/disco1.png' width={482} height={482} top={204} left={204} selec={selec1} rot={discos[1]}/>
        <Image src='/disco0.png' width={316} height={316} top={287} left={287} selec={selec0} rot={discos[0]}/>
      </div>
      :
      <div>
        <Image src='/vitoria.gif' width={890} height={890} top={0} left={0} rot={0}/>
      </div>
      }
    </Main>
  )
}
