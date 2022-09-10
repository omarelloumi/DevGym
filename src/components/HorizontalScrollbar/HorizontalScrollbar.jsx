import React from 'react'
import { Box } from '@mui/material';
import BodyPart from '../BodyPart/BodyPart';
import { ScrollMenu} from 'react-horizontal-scrolling-menu';
const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {

  return (
    <ScrollMenu>
    {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {bodyParts && <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />}
        </Box>
      ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar