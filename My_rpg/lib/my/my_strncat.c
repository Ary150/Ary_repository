/*
** ETNA PROJECT, 2022
** LIBMY
** File description
** 		my_strncat.c
*/

char *my_strncat(char *dest, const char *src, int n)
{
    char *start;

    start = dest;
    while (*dest)
        dest++;
    while (*src && n > 0) {
        *dest = *src;
        dest++;
        src++;
        n--;
    }
    *dest = '\0';
    return (start);
}
