import Theme from './Theme'
import '../styles/Themes.scss'

const ThemesList = ({themes, className, handleRemoveTheme, elClassName}) => {
    return (
      <div className={className}>
        {themes &&
          themes.map((el, index) => {
            return (
              <Theme
                key={el.val}
                theme={el}
                idx={index}
                className={handleRemoveTheme ? elClassName + ' hidden-button-delete' : elClassName}
                handleRemoveTheme={handleRemoveTheme ? handleRemoveTheme : ""}
              />
            );
          })}
      </div>
    );
}

export default ThemesList