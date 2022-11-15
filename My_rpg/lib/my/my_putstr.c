/*
** ETNA PROJECT, 2022
** LIBMY
** File description
** 		my_putstr.c
*/

void my_putchar(char c);

void my_putstr(const char *str)
{
    int i;

    i = 0;
    while(str[i]){
        my_putchar(str[i]);
        i = i + 1;
    }
}
