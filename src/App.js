// Dribbble design:  https://dribbble.com/shots/2421209-Blog-Post -->
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

export default function App() {
  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>
          <strong>Be a man:</strong>
          <br />
          Respect Women
        </h1>

        <div className="author">
          <img src="https://randomuser.me/api/portraits/women/79.jpg" alt="" />
          <p>
            Alicia <strong>Vikander</strong>
          </p>
        </div>
      </div>

      <div className="blog-content">
        <div className="blog-text">
          <p>
            Porem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            impedit reprehenderit et natus voluptates incidunt dolore
            asperiores, sit totam maiores accusamus eius excepturi nisi
            sapiente, corporis ratione amet veritatis quos earum! Perspiciatis
            totam praesentium quisquam rem corporis quasi doloremque labore.
          </p>
          <p>
            Dolore explicabo quo natus nulla minima fugiat quis aperiam in
            commodi harum vero quod animi ratione impedit earum, blanditiis
            voluptatibus magnam tenetur sint possimus nesciunt sit. Quo itaque,
            tenetur sint tempora dolor, iste odio doloribus quasi expedita
            accusamus quos facilis.
          </p>
          <p>
            Reiciendis eligendi provident blanditiis necessitatibus cum? Non
            magnam, iure maxime ad quibusdam explicabo? Accusamus quibusdam
            obcaecati laborum unde neque. Consequuntur, recusandae tenetur
            fugiat unde possimus deserunt dignissimos fuga perspiciatis est eos
            consequatur assumenda minima, obcaecati vel dolores? Pariatur, error
            numquam!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
            magnam, natus eos possimus quibusdam eum adipisci veritatis atque
            sunt, dignissimos explicabo ullam reiciendis placeat minima fugit
            unde in sapiente inventore quam velit labore rem dolore quia
            nesciunt? Laborum sapiente quasi itaque veniam, assumenda recusandae
            nobis a iure sint illo praesentium?
          </p>
          <p>
            Sequi, voluptates delectus omnis dolor sed velit tenetur dolore
            dolorem ratione soluta corporis, magnam at minima error enim rerum
            possimus ut aliquid suscipit! Nesciunt, asperiores, explicabo
            perspiciatis nihil impedit voluptate tempore, ut ad atque totam
            libero perferendis vero. Modi minima repellendus libero animi
            maiores nemo beatae fugit, cupiditate cum facere!
          </p>
        </div>

        <div className="blog-info">
          <p>
            FRI 25 AUGUST 2020 - <strong>10:00</strong>
          </p>
          <button>
            <FontAwesomeIcon className="icon" icon={faHeart} />
          </button>
        </div>
      </div>
    </div>
  );
}
