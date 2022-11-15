/*
** ETNA PROJECT, 2022
** LIBMY
** File description
** 		my_strcat.c
*/

char *my_strcat(char *dest, const char *src)
{
    int i;
    int j;

    i = 0;
    j = 0;
    while (dest[i])
        i = i + 1;
    while (src[j]) {
        dest[i] = src[j];
        i = i + 1;
        j = j + 1;
    }
    dest[i] = '\0';
    return (dest);
}
