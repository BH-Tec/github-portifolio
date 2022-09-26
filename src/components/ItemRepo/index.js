import React from 'react';
import { ItemContainter } from './styles';

function ItemRepo(repo) {
  return (
    <ItemContainter>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      
      <a href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a><br />
      <a href='#' className="remover">Remover</a>
      <hr />
    </ItemContainter>
  )
}

export default ItemRepo;