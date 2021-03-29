interface TitleProps {
  titlePart1: string;
  titlePart2: string;
}

const Title = ({ titlePart1, titlePart2 }: TitleProps) => {
  return (
    <span>
      {titlePart1}
      <p>{titlePart2}</p>
    </span>
  );
};

export default Title;
