/*
** ETNA PROJECT, 2022
** LIBMY
** File description
** 		my_strcpy.c
*/

char *my_strcpy(char *dest, char *src)
{
    int i;

    i = 0;
    while (src[i] != '\0') {
        dest[i] = src[i];
        i = i + 1;
    }
    dest[i] = '\0';
    return (dest);
}
