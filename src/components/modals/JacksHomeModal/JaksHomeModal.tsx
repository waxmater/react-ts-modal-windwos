import { useModalContext } from "../../contexts/ModalContext"

const pages = [
  {
    page: 1,
    text: "Вот дом, который построил Джек."
  },
  {
    page: 2,
    text: "А это пшеница, которая в тёмном чулане хранится\nв доме, который построил Джек."
  },
  {
    page: 3,
    text: "А это весёлая птица-синица,\nкоторая часто ворует пшеницу,\nкоторая в тёмном чулане хранится\nв доме, который построил Джек."
  },
  {
    page: 4,
    text: "Вот кот,\nкоторый пугает и ловит синицу,\nкоторая часто ворует пшеницу,\nкоторая в тёмном чулане хранится\nв доме, который построил Джек."
  }
];

export const JaksHomeModal = ({
  page=1
}) => {
  const context = useModalContext()

  const currentPage = pages.find(p => p.page == page)
  return (
    <>
      <p>
        Страница {page}
      </p>
      <p>
        {currentPage? currentPage.text : "Страница не найдена"}
      </p>
      <div>
        <button 
        onClick={() => {context?.openModal(<JaksHomeModal page={page-1}/>)}}
        >
          Назад  
        </button>

        <button
          onClick={() => {context?.openModal(<JaksHomeModal page={page+1}/>)}}
        >
          Вперёд
        </button>
      </div>
      <span>
        tip: Назад откроет откроет предыдущую страницу, {"\n"} 
        Вперёд - следующую, {"\n"} 
        X - покажет страницу с которой вы сюда попали, {"\n"} 
        Нажатие на темную область вернёт на глваный экран {"\n"} 
      </span>
    </>
  )
}