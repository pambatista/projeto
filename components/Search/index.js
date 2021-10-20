import styles from './styles.module.scss';
import Image from 'next/image'

function Search() {
  return (
    <div className={styles.container}>
      <div className={styles.field}>
        <button>
          <img src="/icons/search.svg"  alt="imagem"/>
        </button>
        <input type="text" placeholder="Pesquisar no blog..." />
      </div>
    </div>
  )
}

export default Search;
