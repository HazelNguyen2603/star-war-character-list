import React from "react";
import { Modal, Flex, Spin, message } from "antd";
import { ICharacter } from "types";
import { useGetPlanet } from "hooks";
import { extractNumberFromUrl } from "utils/extractNumber";

interface ICharacterModal {
  open: boolean;
  handleClose: () => void;
  character: ICharacter;
}
const CharacterModal = ({ open, handleClose, character }: ICharacterModal) => {
  const planetId = extractNumberFromUrl(character.homeworld);
  const { planet, isLoading, isError } = useGetPlanet(planetId || 1);

  if (isError) return <>{message.error("Something went wrong!")}</>;
  return (
    <Modal
      title={character?.name}
      open={open}
      //   onOk={handleOk}
      onCancel={handleClose}
      footer={null}
    >
      {isLoading ? (
        <Spin />
      ) : (
        <Flex vertical gap="5px">
          <div>
            <h4>Overview</h4>
            <p>Height: {Number(character?.height || 0) * 0.01} m</p>
            <p>Mass: {Number(character?.mass || 0)} kg</p>
            <p>Birth Year: {character.birth_year}</p>
            <p>Gender: {character.gender}</p>
          </div>
          <div>
            <h4>Character's homeworld</h4>
            <p>Name: {planet?.name || ""}</p>
            <p>Rotation period: {planet?.rotation_period || ""}</p>
            <p>Orbital period: {planet?.orbital_period || ""}</p>
            <p>Diameter: {planet?.diameter || ""}</p>
            <p>Climate: {planet?.climate || ""}</p>
          </div>
        </Flex>
      )}
    </Modal>
  );
};

export default CharacterModal;
