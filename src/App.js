import React, { Component } from "react"
import "./App.css"


const PHOTO_URL = (photoId) => `https://picsum.photos/id/${photoId}/300/300`
const PHOTO_LIST_URL = "https://picsum.photos/list"

class App extends Component {
  state = {
    photos: [],
  }

  componentDidMount() {
    fetch(PHOTO_LIST_URL)
      .then((photo) => photo.json())
      .then((data) => this.setState({ photos: data }))
  }

  render() {
    const { photos = [] } = this.state
    console.log(photos)
    return (
      <React.Fragment>
        <header>
          <h1>Photo Wall</h1>
          <p>
            Start by reading App.jsx and completing the numbered steps.
            Afterward, delete this paragraph. Then, open up App.css and complete
            the instructions there.
          </p>
        </header>
        <div className="collage">
          {photos.map((photo) => (
            <img
              alt={photos.filename}
              key={photo.id}
              src={PHOTO_URL(photo.id)}
            />
          ))}
        </div>
      </React.Fragment>
    )
  }
}

export default App
