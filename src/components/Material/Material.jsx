import './Material.scss'

const Material = ({content}) => {
  return (
    <div className='material'>
        <div className='material__title'>
            <h2 className='material__h2'>{content.title}</h2>
        </div>
        <div className='material__content'>
            <div className='material__post'>
                <div className='material__image' style={{ backgroundImage: `url(${content.posts.post_1.image})`}}>
                    <span className='material__type'>{content.posts.post_1.type}</span>
                </div>
                <div className='material_epigraph'>
                    <span className='material__date'>{content.posts.post_1.date}</span>
                    <span className='material__imgtitle'>{content.posts.post_1.title}</span>
                </div>
            </div>
            <div className='material__post'>
                <div className='material__image' style={{ backgroundImage: `url(${content.posts.post_2.image})`}}>
                    <span className='material__type'>{content.posts.post_2.type}</span>
                </div>
                <div className='material_epigraph'>
                    <span className='material__date'>{content.posts.post_2.date}</span>
                    <span className='material__imgtitle'>{content.posts.post_2.title}</span>
                </div>
            </div>
            <div className='material__post'>
                <div className='material__image' style={{ backgroundImage: `url(${content.posts.post_3.image})`}}>
                    <span className='material__type material__type-b'>{content.posts.post_3.type}</span>
                </div>
                <div className='material_epigraph'>
                    <span className='material__date'>{content.posts.post_3.date}</span>
                    <span className='material__imgtitle'>{content.posts.post_3.title}</span>
                </div>
            </div>
            <div className='material__post'>
                <div className='material__image' style={{ backgroundImage: `url(${content.posts.post_4.image})`}}>
                    <span className='material__type'>{content.posts.post_4.type}</span>
                </div>
                <div className='material_epigraph'>
                    <span className='material__date'>{content.posts.post_4.date}</span>
                    <span className='material__imgtitle'>{content.posts.post_4.title}</span>
                </div>
            </div>
        </div>
        <div className='material__blog'>
            <a href={content.button_link}>
                <button className='material__button'>{content.button_label}</button>
            </a>
        </div>
    </div>
  )
}

export default Material