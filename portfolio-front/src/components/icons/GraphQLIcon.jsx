const GraphQLIcon = ({style}) => {
  return (
    
    <svg 
      xmlns="http://www.w3.org/2000/svg"  
      viewBox="0 0 48 48" 
      width={style.width}
      height={style.height} 
      className={style.opacity}
      baseProfile="basic"
    >
        <path 
          fill={style.fill} 
          d="M24.5,44.661L7,34.32V13.68L24.5,3.339L42,13.68v20.64L24.5,44.661z M9,33.18l15.5,9.159L40,33.18	V14.82L24.5,5.661L9,14.82V33.18z"
        />
        <circle cx="24.5" cy="5" r="4" fill={style.fill}/>
        <circle cx="24.5" cy="43" r="4" fill={style.fill}/>
        <circle cx="8.5" cy="33" r="4" fill={style.fill}/>
        <circle cx="40.5" cy="33" r="4" fill={style.fill}/>
        <circle cx="8.5" cy="15" r="4" fill={style.fill}/>
        <circle cx="40.5" cy="15" r="4" fill={style.fill}/>
        <path fill={style.fill} d="M42.72,34.5H6.28L24.5,2.478L42.72,34.5z M9.72,32.5h29.56L24.5,6.522L9.72,32.5z"/>
      </svg>
  )
}

export default GraphQLIcon;