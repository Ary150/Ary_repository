/*
** ETNA PROJECT, 2022
** LIBMY
** File description
** 		my_putnbr.c
*/

void my_putchar(char c);

void my_putnbr(int n)
{
    unsigned int nb;

    nb = n;
    if (n < 0) {
        my_putchar('-');
        nb = nb * -1;
    }
    if (nb > 9) {
        my_putnbr(nb / 10);
        my_putnbr(nb % 10);
    }
    else
        my_putchar(nb + '0');
}
