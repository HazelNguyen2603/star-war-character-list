import { Col, Flex, Input, Pagination, Result, Row, Spin } from "antd";
import { CharacterCard, CharacterModal } from "components";
import { useGetCharacters } from "hooks";
import { useState } from "react";
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

  if (isError)
    return <Result status="500" subTitle="Sorry, something went wrong." />;

  return (
    <>
      <Flex vertical gap="large" style={{ padding: "20px" }}>
        <h1>Character List</h1>

        {isLoading ? (
          <Spin />
        ) : (
          <Flex gap="large" vertical>
            {customCharactor?.results?.length === 0 ? (
              <p>No data found</p>
            ) : (
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
            )}

            {customCharactor?.results?.length > 0 && (
              <Pagination
                style={{ alignSelf: "flex-end" }}
                defaultCurrent={currentPage}
                total={customCharactor.count}
                onChange={(page) => handleChangePagination(page)}
              />
            )}
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
      </Flex>
    </>
  );
};

export default CharacterPage;
