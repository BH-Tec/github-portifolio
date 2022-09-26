import { Container } from './styles';
import Input from '../components/Input'
import ItemRepo from '../components/ItemRepo';
import Button from '../components/Button';
import gitLogo from '../assets/GitHub-Logo.png'
import { useState } from 'react';
import { api } from '../services/api';

function App() {

  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([])

  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`)

    if(data.id) {
      const isExist = repos.find(repo => repo.id === data.id)

      if(!isExist) {
        setRepos( prev => [...prev, data])
        setCurrentRepo('')
        return
      }
    }
    alert('Repositorio não encontrado')
  }

  return (
    <Container>
      <img src={gitLogo} width={96} height={72}/>
      <Input value={currentRepo} onChange={(e)=> setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo repo={repo}/>)}
    </Container>
  );
}

export default App;
