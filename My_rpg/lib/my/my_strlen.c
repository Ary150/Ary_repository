/*
** ETNA PROJECT, 2022
** LIBMY
** File description
** 		my_strlen.c
*/

int my_strlen(const char *str)
{
  int i;

  i = 0;
  while(str[i])
    i = i + 1;
  return(i);
}
