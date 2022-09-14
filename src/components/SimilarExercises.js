import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }} marginBottom="50px">
      <Typography variant="h4" marginBottom="50px">
        Exercises that target the same muscle group
      </Typography>
      <Stack
        direction="row"
        sx={{ p: "2", position: "relative" }}
        marginBottom="100px"
      >
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>

      <Typography variant="h4" marginBottom="50px">
        Exercises that use the same equipment
      </Typography>
      <Stack
        direction="row"
        sx={{ p: "2", position: "relative" }}
        marginBottom="100px"
      >
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
