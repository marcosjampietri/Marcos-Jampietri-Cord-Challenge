import styled from "styled-components";

const Poll = () => {
    const results = {
        Vanilla: 17,
        Chocolate: 47,
        Caramel: 32,
        Banana: 28,
    };

    const sorted = Object.entries(results)
        .sort(([, a], [, b]) => b - a)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

    const keys = Object.keys(sorted);
    const values = Object.values(results).sort((a, b) => b - a);

    const sumValues = values.reduce((a, b) => a + b);

    const colors = [
        "hsla(220, 70%, 40%, 1)",
        "hsla(100, 70%, 40%, 1)",
        "hsla(50, 70%, 40%, 1)",
        "hsla(0, 70%, 40%, 1)",
        "blue",
    ];

    return (
        <Table>
            <Flavours>
                {keys.map((item, i) => (
                    <div key={i}>{item}</div>
                ))}
            </Flavours>
            <Votes>
                {values.map((item, i) => (
                    <Value
                        key={i}
                        style={{
                            width: `${(100 * item * 10) / sumValues}px`,
                            backgroundImage: `linear-gradient(hsla(0, 0%, 90%, 0.5), ${colors[i]})`,
                        }}
                    >
                        <Decimal>{item} votes</Decimal>
                        <Percentage>
                            {((100 * item) / sumValues).toFixed(1)}%
                        </Percentage>
                    </Value>
                ))}
            </Votes>
        </Table>
    );
};

export default Poll;

const Table = styled.div`
    background-color: white;

    padding: 35px;
    margin: 5px;

    border-radius: 8px;
    box-shadow: 1px 1px 15px grey;

    display: flex;

    justify-content: space-between;
`;

const Grid = styled.div`
    display: grid;
    grid-auto-rows: 70px;
`;

const Flavours = styled(Grid)`
    padding: 5px;
    align-items: center;

    justify-items: end;
`;

const Votes = styled(Grid)``;

const Value = styled.div`
    // min-width: 200px;
    padding: 10px;
    margin: 10px;

    border-radius: 3px;
    box-shadow: 2px 2px 8px hsla(0, 0%, 30%, 0.5);

    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Decimal = styled.div`
    color: white;
`;
const Percentage = styled.div``;
