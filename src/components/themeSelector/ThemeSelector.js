import { useTheme } from "../../hooks/useTheme"
import "./ThemeSelector.css"
import madeIcon from '../../assets/mode-icon.svg'

const themColors = ['#58249c','#249c6b','#b70233']

export default function ThemeSelector() {
    const {changeColor, changeMode, mode} = useTheme()

    const toogleMode = () =>{
        changeMode(mode === 'dark' ? 'light' : 'dark')
    }
    console.log(mode)
  return (
    <div className="theme-selector">
        <div className="mode-toggle">
            <img 
            onClick={toogleMode}
             src={madeIcon}
             alt="dark-light toggle icon"
             style={{filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)'}}
            />
        </div>
        <div className="theme-buttons">
            {themColors.map((color) => (
                <div 
                key={color}
                onClick={() => changeColor(color)}
                style={{background: color}}
                />
            ))}
        </div>
    </div>
  )
}

