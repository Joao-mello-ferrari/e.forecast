// This component displays the default welcome message shown to users
// when they first visit the application, before searching for any cities
import { Default } from "../styledComponents/default"

export const DefaultText = () =>{
  return(
    // Container for the welcome message using styled component
    <Default>
      {/* Main welcome title */}
      <p className="default-title">Welcome to e.forecast</p>
      {/* Instructions for the user */}
      <p className="default-text">Make your first city search above!</p>
    </Default>
  )
}