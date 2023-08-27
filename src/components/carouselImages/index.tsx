import {Screenshots} from "../../api/types/gameType";
import {Grid, ImageList, ImageListItem, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";

import './index.css';

type CarouselImagesProps = {
    img: Screenshots[]
}

export function CarouselImages ({img}: CarouselImagesProps) {

    const [primaryImg, setPrimaryImg] = useState('');
    const [stylePrimaryImg, setStylePrimaryImg] = useState('item');

    useEffect(() => {
        if(img.length !==0) {
            setPrimaryImg(img[0].image);
            setStylePrimaryImg(String(img[0].id));
        }
    }, [img]);

    function changePrimaryImg(event: React.MouseEvent<HTMLImageElement>, imgId: number) {
        setPrimaryImg(event.currentTarget.src);
        if(imgId === Number(event.currentTarget.id)) {
            setStylePrimaryImg(event.currentTarget.id);
        }
    }

    return (
        <>
            {
                img.length &&
                <Grid container justifyContent="center">
                    {/*<Grid item xs={12}>*/}
                        <Typography variant="body1">Screenshots:</Typography>

                    {/*</Grid>*/}
                    {/*<Grid item xs={10} justifyContent={"center"}>*/}
                        <img src={primaryImg} alt="Primary image" className={"primary"}/>
                    {/*</Grid>*/}
                                <ImageList sx={{
                                        height: 300, gridAutoFlow: "column",
                                        gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr)) !important",
                                        gridAutoColumns: "minmax(300px, 1fr)",
                                        "&::-webkit-scrollbar-track": {
                                            "-webkit-box-shadow": "inset 0 0 6px #787878",
                                        // backgroundColor: "#F5F5F5",
                                            borderRadius: "10px"
                                        }, "&::-webkit-scrollbar": {
                                            width: "12px",
                                            height: "12px",
                                            // backgroundColor: "#494949"
                                        },
                                        "&::-webkit-scrollbar-thumb": {
                                            backgroundColor: "#8DFD1B",
                                            borderRadius: "10px"
                                            // borderRadius: 2
                                        }}}

                                >
                                    {
                                        img.map(el =>
                                        <>
                                            <ImageListItem key={el.id} sx={{cursor: 'pointer'}}>
                                                <img
                                                    src={el.image}
                                                    alt={`Image id: ${el.id}`}
                                                    id={`${el.id}`}
                                                    loading="lazy"
                                                    className={stylePrimaryImg === String(el.id) ? 'primaryItem' : 'item'}
                                                    onClick={(event: React.MouseEvent<HTMLImageElement>) => changePrimaryImg(event, el.id)}
                                                />
                                            </ImageListItem>
                                        </>
                                        )
                                    }
                                </ImageList>

                </Grid>
            }
        </>


    )
}