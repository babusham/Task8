import React from 'react';
import Layout from '../components/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: 'center',
          p: 2,
          '& h4': {
            fontWeight: 'bold',
            my: 2,
            fontSize: '2rem',
          },
          '& p': {
            textAlign: 'justify',
          },
          '@media (max-width:600px)': {
            mt: 0,
            '& h4 ': {
              fontSize: '1.5rem',
            },
          },
        }}
      >
        <Typography variant="h4">ABOUT US</Typography>
        <p>
        One of the leading casual dining chains in India, Barbeque Nation pioneered the concept of “over the table barbeque” live grills embedded in dining tables – allowing guests to grill their own barbecue’s right at their tables. Barbeque Nation was founded in 2006 with the concept of 'all you can eat'. We currently own and operate around 200 outlets in India, 4 outlets in UAE, 1 outlet in Malaysia and 1 outlet in Oman.
        </p>
        <br />
        <p>
        Indian cuisine is a natural part of the diet in the markets in which the Barbeque Nation Restaurants operate. We continue to offer new menu options, both vegetarian and non-vegetarian, largely based on Indian cuisine and use seasonal customer preferences to introduce new dishes. We also run popular food festivals at our Barbeque Nation Restaurants, thereby offering our customers a range of Indian and international cuisines.
        </p>
        <br />
        <p>
        Our fixed price ‘all you can eat’ concept at our Barbeque Nation Restaurants offers our customers a varying spread of consistently delicious food at a value-oriented price in a pleasant and casual dining environment. We believe that barbeque cuisine is distinctively attractive as compared with other dining options due to its DIY and cooked-at-the-table nature and the flexibility and fun of mixing and matching a wide variety of meats, vegetables, sauces and condiments to create dishes according to each diner’s individual tastes and preferences. In addition, fixed price dining is very popular amongst relatively larger groups, due to customers’ perception of value for money and the comfort of certainty over the bill amount irrespective of varying individual appetites and consumption.
        </p>
      </Box>
    </Layout>
  );
};

export default About;