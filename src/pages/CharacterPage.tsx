import { Col, Flex, Pagination, Row, Spin } from "antd";
import { CharacterCard, CharacterModal } from "components";
import { useGetCharacters } from "hooks";
import { useMemo, useState } from "react";
import { ICharacter } from "types";

const CharacterPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [modalObj, setModalObj] = useState<{
    open: boolean;
    character?: ICharacter;
  }>({
    open: false,
  });

  const { customCharactor, isLoading, isError } = useGetCharacters(currentPage);

  const handleChangePagination = (page: number) => {
    setCurrentPage(page);
  };

  if (isError) return <p>Somthing went wrong!</p>;
  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1>Character List</h1>
        {isLoading ? (
          <Spin />
        ) : (
          <Flex gap="large" vertical>
            <Row gutter={[16, 16]}>
              {customCharactor?.results?.map((character) => (
                <Col
                  key={character.name}
                  xs={24}
                  sm={12}
                  md={8}
                  lg={6}
                  onClick={() =>
                    setModalObj({
                      open: true,
                      character: character,
                    })
                  }
                >
                  <CharacterCard character={character} />
                </Col>
              ))}
            </Row>
            <Pagination
              style={{ alignSelf: "flex-end" }}
              defaultCurrent={currentPage}
              total={customCharactor.count}
              onChange={(page) => handleChangePagination(page)}
            />
          </Flex>
        )}
        {modalObj.open && modalObj.character && (
          <CharacterModal
            character={modalObj.character}
            open={modalObj.open}
            handleClose={() =>
              setModalObj({
                open: false,
              })
            }
          />
        )}
      </div>
    </>
  );
};

export default CharacterPage;
