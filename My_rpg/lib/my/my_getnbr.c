/*
** ETNA PROJECT, 2022
** LIBMY
** File description
** 		my_getnbr.c
*/

int my_getnbr(const char *str)
{
    int nb;
    int is_neg;
    int i;
    
    i = 0;
    nb = 0;
    is_neg = 1;
    while(str[i] == '-' || str[i] == '+') {
        if (str[i] == '-')
            is_neg = is_neg * - 1;
        i = i + 1;
    }
    while(str[i] != '\0') {
        if (str[i] >= '0' && str[i] <= '9') {
            nb = nb * 10;
            nb = nb + str[i] - '0';
            i = i + 1;
        }
        else {
            return(nb * is_neg);
        }
    }
    return(nb * is_neg);
}
