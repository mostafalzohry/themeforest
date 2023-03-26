import React, { useState } from "react";
import { Card, CardContent, TextField, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const articles = [
  {
    id: 1,
    title: "I. Getting Started",
    subtitle: "Everything you need to know to get started",
  },
  {
    id: 2,
    title: "II. Getting twwwwwo",
    subtitle: "Everything you need to know to get started",
  },
  {
    id: 3,
    title: "III. Getting third",
    subtitle: "Everything you need to know to get started",
  },
  {
    id: 4,
    title: "User Settings",
    subtitle: "Everything you need to know to get started",
  },
  {
    id: 5,
    title: "Advanced Usage",
    subtitle: "Everything you need to know to get started",
  },
];

function SearchCard() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    const filtered = articles.filter(
      (article) =>
        article.title.toLowerCase().includes(value) ||
        article.subtitle.toLowerCase().includes(value)
    );
    setSearchValue(value);
    setFilteredArticles(filtered);
  };

  return (
    <>
      <TextField
        label="search posts, tags and authors"
        fullWidth="true"
        value={searchValue}
        onChange={handleSearch}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      {searchValue && (
        <>
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <Card key={article.id} sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    {article.title}
                  </Typography>
                  <Typography variant="caption" component="div">
                    {article.subtitle}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    see all 11 articles <ArrowForwardIcon />
                  </Typography>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography variant="h6">No Results Found</Typography>
          )}
        </>
      )}
    </>
  );
}

export default SearchCard;
