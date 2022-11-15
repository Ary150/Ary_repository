/*
** ETNA PROJECT, 2022
** LIBMY
** File description
** 		my_isneg.c
*/

void my_putchar(char c);

void my_isneg(int n)
{
  if (n < 0)
    my_putchar('N');
  else
    my_putchar('P');
}
