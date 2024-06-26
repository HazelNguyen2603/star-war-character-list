import { Card } from "antd";
import { ICharacter } from "types";

interface ICharacterCard {
  character: ICharacter;
}

const { Meta } = Card;
const CharacterCard = ({ character }: ICharacterCard) => {
  const color = "red";
  console.log("character", character);
  return (
    <Card
      hoverable
      style={{
        width: 240,
        border: `1px solid ${
          character?.eye_color === "white"
            ? "grey"
            : character?.eye_color
            ? character?.eye_color
            : "blue"
        }`,
      }}
      cover={<img alt="example" src={character?.image} />}
    >
      <Meta title={character?.name || ""} />
    </Card>
  );
};

export default CharacterCard;
